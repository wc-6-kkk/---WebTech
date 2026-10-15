import { useState } from 'react';

export default function ToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <div >
      <button onClick={() => setActive((prev) => !prev)}>
        Przełącz stan
      </button>

      <p>
        Aktualny stan: <strong>{active ? 'Aktywny' : 'Nieaktywny'}</strong>
      </p>
    </div>
  );
}