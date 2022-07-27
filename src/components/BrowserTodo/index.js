import './index.css'

const BrowserTodo = props => {
  const {eachHistoryDetails, deleteHistory} = props

  const {logoUrl, domainUrl, timeAccessed, title, id} = eachHistoryDetails

  const onDeleteHistoryItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="browser-history">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-title-url-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <p className="browser-name">{title}</p>
          <p className="browser-url">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-delete-container">
        <button
          className="delete-button"
          type="button"
          testid="delete"
          onClick={onDeleteHistoryItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserTodo
