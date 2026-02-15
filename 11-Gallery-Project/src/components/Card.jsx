const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div>
                    <img className='h-50 w-70 object-cover rounded-xl' src={props.elem.download_url} alt="image" />
                </div>
                <h2 className='font-bold text-xl'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card;