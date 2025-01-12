import { useEffect, Suspense } from 'react';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

type HomeModelProps = {
    url: string;
    position: [number, number, number];
    scale: number; 
}


function CustomCamera() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(10, 100, 10);
        camera.lookAt(10,100,100);
        camera.near = 0.1;
        camera.far = 100; 
        camera.updateProjectionMatrix();
    }, [camera]);

    return null; 
}

const HomeModel: React.FC<HomeModelProps> = ({ url, position, scale}) => {
    const { scene } = useGLTF(url);
    return (
    <Canvas style={{ backgroundColor: "blue", height: '100%', width: '100%' }}>
        <CustomCamera />
        <Suspense fallback={null}>
        <primitive object={scene} position={position} scale={scale} />;
        <Environment preset="sunset" />
        <OrbitControls />
        </Suspense> 
    </Canvas>
    );
}

export default HomeModel;