import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { bootstrapCameraKit, CameraKitSession, createMediaStreamSource, Transform2D, Lens  } from "@snap/camera-kit";

let mediaStream: MediaStream | null = null;

interface CameraOption {
  deviceId: string;
  label: string;
}

interface LensOption {
  id: string;
  name: string;
}

const SnapCamera: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const apiToken = import.meta.env.VITE_JSON_WEB_TOKEN;
  const lensGroupId = import.meta.env.VITE_DEFAULT_GROUP_KEY;

  const [cameraOptions, setCameraOptions] = useState<CameraOption[]>([]);
  const [lensOptions, setLensOptions] = useState<LensOption[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [selectedLens, setSelectedLens] = useState<string>('');
  const [session, setSession] = useState<CameraKitSession | null>(null);

  useEffect(() => {
    const init = async () => {
      const cameraKit = await bootstrapCameraKit({ apiToken: apiToken as string });
      
      const cameraKitSession = await cameraKit.createSession();

      setSession(cameraKitSession);
      
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.replaceWith(cameraKitSession.output.live);
      }
      const { lenses } = await cameraKit.lenses.repository.loadLensGroups([lensGroupId as string]);
      cameraKitSession.applyLens(lenses[0]);
      await setCameraKitSource(cameraKitSession);
      await attachCamerasToSelect();
      await attachLensesToSelect(lenses as LensOption[]);
    };

    init();
  }, [apiToken, lensGroupId]);

  const setCameraKitSource = async (cameraKitSession: CameraKitSession, deviceId?: string) => {
    if (mediaStream) {
      cameraKitSession.pause();
      mediaStream.getVideoTracks()[0].stop();
    }

    mediaStream = await navigator.mediaDevices.getUserMedia({ video: { deviceId } });

    const source = createMediaStreamSource(mediaStream);

    await cameraKitSession.setSource(source);

    const selectedCameraOption = cameraOptions.find(option => option.deviceId === deviceId);
    if (selectedCameraOption && selectedCameraOption.label.toLowerCase().includes('front')) {
      source.setTransform(Transform2D.MirrorX);
    } else {
      source.setTransform(Transform2D.Identity);
    }

    cameraKitSession.play();
  };

  const attachCamerasToSelect = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(({ kind }) => kind === 'videoinput');
    setCameraOptions(cameras as CameraOption[]);
  };

  const handleCameraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deviceId = event.target.value;
    setSelectedCamera(deviceId);
    if (session) setCameraKitSource(session, deviceId);
  };

  const attachLensesToSelect = async (lenses: LensOption[]) => {
    setLensOptions(lenses);
  };

  const handleLensChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lensId = event.target.value;
    setSelectedLens(lensId);
    const lens = lensOptions.find((lens) => lens.id === lensId);
    if (lens && session) session.applyLens(lens as unknown as Lens);
  };

  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
    <canvas ref={canvasRef} id="canvas-container" className="mw-100" style={{ height: '100vh', maxHeight: '75vh', width: '100%' }}></canvas>
      <Row className="w-100 mt-3 justify-content-center">
        <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Camera</Form.Label>
            <Form.Select value={selectedCamera} onChange={handleCameraChange}>
              {cameraOptions.map(camera => (
                <option key={camera.deviceId} value={camera.deviceId}>
                  {camera.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Lens</Form.Label>
            <Form.Select value={selectedLens} onChange={handleLensChange}>
              {lensOptions.map(lens => (
                <option key={lens.id} value={lens.id}>
                  {lens.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default SnapCamera;
