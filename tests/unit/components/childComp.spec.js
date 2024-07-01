import { mount } from '@vue/test-utils';
import ChildComp from '@/components/ChildComp.vue';

describe('Componente: ChildComp.vue', () => {
  it('Captura el mensaje y evite el evento', async () => {
    const wrapper = mount(ChildComp);

    // probamos el ingreso de texto en el input
    const message = '';
    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);

    // probamos el método submit a través del click en el botón
    const boton = wrapper.find('form');
    await boton.trigger('submit');

    // probamos que el mensaje fue enviado correctamente
    expect(wrapper.emitted('message-sent')).toBeTruthy();

    // probamos que el mensaje enviado, sea igual al recibido
    expect(wrapper.emitted('message-sent')[0]).toEqual([message]);
  });
});
