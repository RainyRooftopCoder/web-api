import { useParams, useNavigate } from 'react-router-dom'
import '../styles/ApiDetail.css'

function ApiDetail() {
  const { apiId } = useParams<{ apiId: string }>()
  const navigate = useNavigate()

  return (
    <div className="container">
      <header className="detail-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 뒤로가기
        </button>
        <h1>{apiId} API</h1>
      </header>

      <main className="detail-content">
        <div className="content-box">
          <h2>API 설명</h2>
          <p>여기에 {apiId} API에 대한 설명과 예제를 추가하세요.</p>
        </div>

        <div className="content-box">
          <h2>예제</h2>
          <p>예제 코드가 들어갈 영역입니다.</p>
        </div>
      </main>
    </div>
  )
}

export default ApiDetail
