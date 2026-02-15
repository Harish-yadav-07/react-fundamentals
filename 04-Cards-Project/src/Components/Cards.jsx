import { ArrowRight } from 'lucide-react';

const Cards = (props) => {
    return (
        <div className='parent'>
            <div className='titles'>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <div className="specs">
                    <div className="names">
                        {props.specs.map((spec, i) => (
                            <h4 key={i}>{spec}</h4>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h2>Explore</h2>
                <ArrowRight className='arrow-icon' size={40} />
            </div>
        </div>
    )
}   
export default Cards; 