import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState({
    normal: '',
    text: '',
    select: '',
    check: false,
    estado: 'feliz',
  });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };
  console.log(value);

  return (
    <div>
      {value.length < 5 ? <span>At least 5 char</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="text" value={value.text} onChange={handleChange} />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="credo">--Credo--</option>
        <option value="inunum">--In Unum--</option>
        <option value="deum">--Deum--</option>
        <option value="omnipotent">--Omnipotent--</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          checked={value.estado === 'feliz'}
          type="radio"
          value="feliz"
          name="estado"
        />{' '}
        Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === 'triste'}
        />{' '}
        Triste
        <input
          onChange={handleChange}
          type="radio"
          value="conTenis"
          name="estado"
          checked={value.estado === 'conTenis'}
        />{' '}
        Con Tenis
      </div>
    </div>
  );
};

export default App;
