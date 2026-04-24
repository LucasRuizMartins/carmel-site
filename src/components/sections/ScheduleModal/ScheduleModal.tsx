import React, { useState } from 'react';
import { Modal } from '../../ui/Modal/Modal';
import { Button } from '../../ui/Button/Button';
import { BASE_URL } from '../../../constants';
import type { FormData } from '../../../types';
import './ScheduleModal.css';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_FORM: FormData = {
  type: 'juridica',
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: FormData['type']) => {
    setForm((prev) => ({ ...prev, type }));
  };

  const handleSubmit = () => {
    const mailto = `mailto:contato@carmelcapital.com.br?subject=Agendamento - ${form.name}&body=${encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nMensagem: ${form.message}`
    )}`;
    window.location.href = mailto;
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agende uma conversa">
      <img src={`${BASE_URL}/imagens/home/modal-contato-img.png`} alt="Contato" className="schedule-modal-img" />

      <div className="schedule-modal-type-toggle">
        {(['juridica', 'fisica'] as const).map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`schedule-modal-type-btn ${form.type === type ? 'schedule-modal-type-btn--active' : 'schedule-modal-type-btn--inactive'}`}
          >
            Pessoa {type === 'juridica' ? 'Jurídica' : 'Física'}
          </button>
        ))}
      </div>

      <div className="schedule-modal-inputs">
        <input className="schedule-modal-input" type="text" name="name" placeholder="Seu nome" value={form.name} onChange={handleChange} />
        <input className="schedule-modal-input" type="email" name="email" placeholder="Seu e-mail" value={form.email} onChange={handleChange} />
        <input className="schedule-modal-input" type="tel" name="phone" placeholder="Seu telefone" value={form.phone} onChange={handleChange} />
        <textarea className="schedule-modal-input schedule-modal-textarea" name="message" placeholder="Mensagem" rows={4} value={form.message} onChange={handleChange} />
      </div>

      <Button className="schedule-modal-submit" size="lg" onClick={handleSubmit}>
        Enviar
      </Button>
    </Modal>
  );
};
