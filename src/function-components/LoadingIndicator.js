function LoadingIndicator({isLoading}) {
    if (typeof isLoading !== 'boolean') {
        throw new Error('isLoading props가 전달되지 않음!')
    }
    
    if (!isLoading) {
        return null
    }

    return (
        <span>로딩중...</span>
    )
}
export default LoadingIndicator;