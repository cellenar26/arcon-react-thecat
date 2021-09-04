import reactDom from 'react-dom'

export default function HelloModalPortal({children}) {
    const element = document.getElementById('helloModal')
    return reactDom.createPortal(children, element)
}