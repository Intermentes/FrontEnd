import './PainelPsicologo.css'
import IconCalendar from '../../../../../Images/UserPage/IconCalendar.png'
import IconLogout from '../../../../../Images/UserPage/IconLogout.png'
import IconPainelControle from '../../../../../Images/UserPage/IconPainelControle.png'
import IconReembolso from '../../../../../Images/UserPage/IconReembolso.png'
import IconPagamentos from '../../../../../Images/UserPage/IconPagamentos.png'
import IconDadosPessoais from '../../../../../Images/UserPage/IconDadosPessoais.png'
import IconDenuncia from '../../../../../Images/UserPage/IconDenuncia.png'
import Iconfolder from '../../../../../Images/UserPage/folder.png'
import { Link } from 'react-router-dom';

export default function PainelPsicologo() {
    return (
        <nav class="nav-page-user">

            <div class="box-data-user">
                <div class="box-name-user">
                    <h2>Minha conta</h2>
                    <p>Oi, Leo!</p>
                </div>
                <Link to={'/PerfilPsicologo/PainelPsicologo'}>
                    <p class="data_user_text" id="text_conta"><img src={IconPainelControle} alt="" />
                        Painel Inicial</p>
                </Link>
            </div>
            <hr />
            <div class="box-data-user">
                <h3>PERFIL / AGENDA </h3>
                <Link to={'/PerfilPsicologo/DadosPessoaisPsicologo'}>
                    <p class="data_user_text" id="text_conta"><img src={IconDadosPessoais} alt="" />
                        Dados pessoais</p>
                </Link>
                <Link to={'/PerfilPsicologo/AgendamentosPsicologo'}>
                    <p class="data_user_text" id="text_conta"><img src={IconCalendar} alt="" />
                        Meu calendário</p>
                </Link>
                <Link to={'/PerfilPsicologo/'}>
                    <p class="data_user_text" id="text_conta"><img src={Iconfolder} alt="" />
                    Perfil de visualização</p>
                </Link>
            </div>
            <hr />
            <div class="box-data-user">
                <h3>FINANCEIRO</h3>
                <Link to={'/Perfil/MeioPagamento'}>
                    <p class="data_user_text" id="text_conta"><img src={IconPagamentos} alt="" />
                       Meio de pagamento</p>
                </Link>
                <Link to={'/Perfil/PainelDeControle'}>
                    <p class="data_user_text" id="text_conta"><img src={IconReembolso} alt="" />
                       Reembolsos</p>
                </Link>
            </div>
            <hr />
            <div class="box-data-user">
                <h3>FALE CONOSCO</h3>
                <Link to={'/Perfil/PainelDeControle'}>
                    <p class="data_user_text" id="text_conta"><img src={IconDenuncia} alt="" />
                       Denúncias</p>
                </Link>
            </div>
            <hr />
            <p class="icone-sair"><img src={IconLogout} alt="" />
                Sair</p>

        </nav>
    )
}