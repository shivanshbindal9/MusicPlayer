const videos=(state=[],action) => {
    switch (action.type) {
        case 'ADD_VIDEO':
            return [
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    completed: false
                }
            ]
        case 'TOGGLE_VIDEO':
            return state.map(video =>
                video.id===action.id? { ...video,completed: !video.completed }:video
            )
        case 'DELETE_VIDEO':
            return state.filter(video =>
                video.id!==action.id
            )
        default:
            return state
    }
}

export default videos