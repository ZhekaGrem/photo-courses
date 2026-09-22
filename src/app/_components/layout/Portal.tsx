'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PopUp from '../form/PopUp';

export default function Portal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = previous;
    };
  }, []);
  return createPortal(
    <dialog
      ref={dialog}
      className="lead-dialog"
      aria-labelledby="lead-title"
      aria-describedby="lead-description"
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}>
      <button type="button" className="dialog-close" aria-label="Закрити форму" onClick={onClose}>
        ×
      </button>
      <p className="eyebrow">Screen Photo School</p>
      <h2 id="lead-title">Поговорімо про ваше навчання</h2>
      <p id="lead-description">
        Залиште заявку — ми зв’яжемося з вами протягом 24 годин. Допоможемо з вибором і розповімо про наступні
        кроки.
      </p>
      <PopUp onClose={onClose} />
    </dialog>,
    document.body
  );
}
