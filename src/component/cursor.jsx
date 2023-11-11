import AnimatedCursor from "react-animated-cursor"

export default function cursor() {
  return (
    <div>
      <AnimatedCursor
      innerSize={10}
      outerSize={12}
      color='91, 227, 104'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  )
}
