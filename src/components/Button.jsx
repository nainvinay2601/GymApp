import React from 'react'

function Button(props) {

    const {text, func} = props;
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md  border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow  duration-200">
      {/* blueShadow is custom class in our index.css that we will create and the [include own css] */}
      <p>{text}</p>
    </button>
  );
}

export default Button