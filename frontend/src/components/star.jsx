export default function Star({ top, left, size, delay }){
    return (
        <div 
        className={`absolute bg-white rounded-full star`}
        style={{ 
            top: `${top}%`, left: `${left}% `, width: `${size}rem`, height: `${size}rem`,
            animationDelay: `${delay}s`
    }}
        ></div>
    )
}