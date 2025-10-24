export default function Image({img, titulo}) {
  return (
    <div>
        <img src={img} alt={titulo} />
        <div>
            <p>{titulo}</p>
        </div>
    </div>
  )
}