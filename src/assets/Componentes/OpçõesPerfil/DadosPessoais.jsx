import style from './DadosPessoais.module.css';
import IconPessoa from '../../Images/UserPage/IconPessoa.png';
import IconAdicao from '../../Images/UserPage/IconAdicao.png';
import IconCard from '../../Images/UserPage/IconCard.png';
import React, { useState } from 'react';
import ModalSenha from './ComponentesModal/ModalSenha';
import ModalCartao from './ComponentesModal/ModalCartao';
import ModalConta from './ComponentesModal/ModalConta';



export default function DadosPessoais() {

    const [isModalSenhaOpen, setIsModalSenhaOpen] = useState(false);
    const [isModalContaOpen, setIsModalContaOpen] = useState(false);

    const openModalSenha = () => setIsModalSenhaOpen(true);
    const closeModalSenha = () => setIsModalSenhaOpen(false);

    const openModalConta = () => setIsModalContaOpen(true);
    const closeModalConta = () => setIsModalContaOpen(false);

    return (
        <section className={style.formsDataUser}>
            <h2 className={style.titleDados}>
                <img src={IconPessoa} alt="Icone de uma pessoa" /> <span>Dados da conta</span>
            </h2>
            <form action='' className={style.dataUser}>
                <div className={style.inputDateUser}>
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id={style.name} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id={style.email} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id={style.telefone} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id={style.cpf} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="dataDeNascimento">Data de nascimento</label>
                    <input type="text" id={style.dataDeNascimento} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="contatoEmergencia">Contato de emergência</label>
                    <input type="text" id={style.contatoEmergencia} />
                </div>
                <div className={style.boxPasswordAndSave}>
                    <div>
                        <p className={style.passwordSubTitle}>Senha</p>
                        <p className={style.password}>***********</p>
                    </div>
                    <button
                        className={style.alterarSenhaButton}
                        type="button"
                        onClick={openModalSenha}
                    >
                        Alterar senha
                    </button>
                    <ModalSenha isOpen={isModalSenhaOpen} onClose={closeModalSenha}>
                        <form action="" className={style.formAlterarSenha}>
                            <div className={style.columnEffectPasswordInput}>
                                <label htmlFor="senha-atual">Senha atual</label>
                                <input type="password" name="" id="senha-atual" />
                            </div>
                                <div className={style.columnEffectPasswordInput}>
                                    <label htmlFor="senha-nova">Nova senha</label>
                                    <input type="password" name="" id="senha-nova" />
                                </div>
                                <div className={style.columnEffectPasswordInput}>
                                    <label htmlFor="confirmar-senha-nova">Confirmar senha</label>
                                    <input type="password" name="" id="confirmar-senha-nova" />
                                </div>
                            <button className={style.buttonSaveNewPassword}>Salvar</button>
                        </form>

                    </ModalSenha>

                </div>
            </form>
            <div className={style.lineBottom}></div>
            <div className={style.buttonSaveOrDelete}>
                <button className={style.desativarContaButton}>Salvar alterações</button>
                <button className={style.desativarContaButton}>Descarta alterações</button>
                <button className={style.desativarContaButton} onClick={openModalConta} type='button'>Desativar conta</button>
                <ModalConta isOpen={isModalContaOpen} onClose={closeModalConta}>
                    <p>Seu perfil será desativado. Você não receberá mais comunicações da nossa plataforma e não terá acesso às suas sessões passadas. Você pode reativar sua conta a qualquer momento, basta abrir sua mente para nos novamente.</p>
                    <div>
                        <button onClick={closeModalConta}>Desativar</button>
                    </div>
                </ModalConta>
            </div>
        </section>
    );
}