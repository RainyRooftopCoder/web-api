import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

// Web API 목록 데이터
const webApis = [
  { id: 'geolocation', name: 'Geolocation API', description: '위치 정보' },
  { id: 'notification', name: 'Notification API', description: '알림' },
  { id: 'webstorage', name: 'Web Storage API', description: '로컬/세션 스토리지' },
  { id: 'fetch', name: 'Fetch API', description: 'HTTP 요청' },
  { id: 'canvas', name: 'Canvas API', description: '그래픽 그리기' },
  { id: 'webaudio', name: 'Web Audio API', description: '오디오 처리' },
  { id: 'websocket', name: 'WebSocket API', description: '실시간 통신' },
  { id: 'webrtc', name: 'WebRTC API', description: '실시간 비디오/오디오' },
  { id: 'indexeddb', name: 'IndexedDB API', description: '클라이언트 데이터베이스' },
  { id: 'clipboard', name: 'Clipboard API', description: '클립보드 작업' },
  { id: 'drag-drop', name: 'Drag and Drop API', description: '드래그 앤 드롭' },
  { id: 'file', name: 'File API', description: '파일 읽기/처리' },
]

function Home() {
  const navigate = useNavigate()

  const handleApiClick = (apiId: string) => {
    navigate(`/api/${apiId}`)
  }

  return (
    <div className="container">
      <header className="home-header">
        <h1>Web API Study</h1>
        <p className="subtitle">브라우저 Web API를 학습하는 프로젝트입니다</p>
      </header>

      <main className="api-grid">
        {webApis.map((api) => (
          <button
            key={api.id}
            className="api-card"
            onClick={() => handleApiClick(api.id)}
          >
            <h3 className="api-name">{api.name}</h3>
            <p className="api-description">{api.description}</p>
          </button>
        ))}
      </main>
    </div>
  )
}

export default Home
