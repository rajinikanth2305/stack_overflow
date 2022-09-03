export default ({onClick}) => {
    return  <div className = 'ms-5'>
    <button type="button" className="p-button p-component p-button-icon-only" onClick={onClick}>
      <span className="p-button-icon p-c pi pi-times"></span>
      <span className="p-button-label p-c">&nbsp;</span>
    </button>
  </div>
}