export default function Star({ top, left, size, delay, brightness = 'normal' }){
    const isBright = brightness === 'bright';
    
    return (
        <div 
            className={`absolute rounded-full star ${isBright ? 'star-bright' : ''}`}
            style={{ 
                top: `${top}%`, 
                left: `${left}%`, 
                width: `${size}rem`, 
                height: `${size}rem`,
                animationDelay: `${delay}s`,
                background: isBright 
                    ? 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,220,255,0.8) 50%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(180,200,255,0.5) 60%, transparent 80%)'
            }}
        />
    )
}