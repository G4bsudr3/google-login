/* ----------------------------------------------------------------
   Simple i18n for the educational Google sign-in clone.
   The footer <select> changes the visible strings and the choice
   is remembered (localStorage) across the two pages.
------------------------------------------------------------------ */

const TRANSLATIONS = {
    "en": {
        title: "Sign in",
        subtitle: "Use your Google Account",
        emailLabel: "Email or phone",
        forgotEmail: "Forgot email?",
        guest: "Not your computer? Use Guest mode to sign in privately.",
        guestLink: "Learn more about using Guest mode",
        createAccount: "Create account",
        createPersonal: "For my personal use",
        createChild: "For my child",
        createWork: "For work or my business",
        next: "Next",
        welcome: "Welcome",
        passwordLabel: "Enter your password",
        showPassword: "Show password",
        forgotPassword: "Forgot password?",
        cantSignIn: "Couldn't sign you in",
        recoveryText1: "To recover your account, contact another administrator on your domain.",
        recoveryLearnMore: "Learn more about account recovery",
        recoveryText2: "Or request a review from the Google Workspace support team. Reviews can take up to 72 hours.",
        contactSupport: "Contact support",
        help: "Help", privacy: "Privacy", terms: "Terms"
    },
    "pt-BR": {
        title: "Inicie sessão",
        subtitle: "Use sua Conta do Google",
        emailLabel: "E-mail ou telefone",
        forgotEmail: "Esqueceu seu e-mail?",
        guest: "Não está no seu computador? Use o modo visitante para fazer login com privacidade.",
        guestLink: "Saiba mais sobre como usar o modo visitante",
        createAccount: "Criar conta",
        createPersonal: "Para uso pessoal",
        createChild: "Para uma criança",
        createWork: "Para trabalho ou empresa",
        next: "Avançar",
        welcome: "Olá!",
        passwordLabel: "Digite sua senha",
        showPassword: "Mostrar senha",
        forgotPassword: "Esqueceu a senha?",
        cantSignIn: "Não foi possível fazer o login",
        recoveryText1: "Para recuperar sua conta, entre em contato com outro administrador no seu domínio.",
        recoveryLearnMore: "Saiba mais sobre a recuperação de conta",
        recoveryText2: "Ou solicite uma análise pela equipe de suporte do Google Workspace. As análises podem demorar até 72 horas.",
        contactSupport: "Entrar em contato com o suporte",
        help: "Ajuda", privacy: "Privacidade", terms: "Termos"
    },
    "es": {
        title: "Iniciar sesión",
        subtitle: "Utiliza tu Cuenta de Google",
        emailLabel: "Correo electrónico o teléfono",
        forgotEmail: "¿Olvidaste el correo electrónico?",
        guest: "¿No es tu ordenador? Usa el modo Invitado para iniciar sesión de forma privada.",
        guestLink: "Más información sobre cómo usar el modo Invitado",
        createAccount: "Crear cuenta",
        createPersonal: "Para mí",
        createChild: "Para mi hijo/a",
        createWork: "Para el trabajo o mi empresa",
        next: "Siguiente",
        welcome: "Te damos la bienvenida",
        passwordLabel: "Introduce tu contraseña",
        showPassword: "Mostrar contraseña",
        forgotPassword: "¿Has olvidado tu contraseña?",
        cantSignIn: "No se pudo iniciar sesión",
        recoveryText1: "Para recuperar tu cuenta, ponte en contacto con otro administrador de tu dominio.",
        recoveryLearnMore: "Más información sobre la recuperación de cuentas",
        recoveryText2: "O solicita una revisión al equipo de asistencia de Google Workspace. Las revisiones pueden tardar hasta 72 horas.",
        contactSupport: "Contactar con asistencia",
        help: "Ayuda", privacy: "Privacidad", terms: "Condiciones"
    },
    "fr": {
        title: "Se connecter",
        subtitle: "Utilisez votre compte Google",
        emailLabel: "E-mail ou téléphone",
        forgotEmail: "E-mail oublié ?",
        guest: "Vous n'êtes pas sur votre ordinateur ? Utilisez le mode Invité pour vous connecter en mode privé.",
        guestLink: "En savoir plus sur l'utilisation du mode Invité",
        createAccount: "Créer un compte",
        createPersonal: "Pour moi",
        createChild: "Pour mon enfant",
        createWork: "Pour le travail ou mon entreprise",
        next: "Suivant",
        welcome: "Bienvenue",
        passwordLabel: "Saisissez votre mot de passe",
        showPassword: "Afficher le mot de passe",
        forgotPassword: "Mot de passe oublié ?",
        cantSignIn: "Impossible de vous connecter",
        recoveryText1: "Pour récupérer votre compte, contactez un autre administrateur de votre domaine.",
        recoveryLearnMore: "En savoir plus sur la récupération de compte",
        recoveryText2: "Ou demandez un examen à l'équipe d'assistance Google Workspace. Les examens peuvent prendre jusqu'à 72 heures.",
        contactSupport: "Contacter l'assistance",
        help: "Aide", privacy: "Confidentialité", terms: "Conditions"
    },
    "de": {
        title: "Anmelden",
        subtitle: "Mit Ihrem Google-Konto",
        emailLabel: "E-Mail oder Telefonnummer",
        forgotEmail: "E-Mail-Adresse vergessen?",
        guest: "Nicht Ihr Computer? Nutzen Sie den Gastmodus, um sich privat anzumelden.",
        guestLink: "Weitere Informationen zur Verwendung des Gastmodus",
        createAccount: "Konto erstellen",
        createPersonal: "Für mich",
        createChild: "Für mein Kind",
        createWork: "Für die Arbeit oder mein Unternehmen",
        next: "Weiter",
        welcome: "Willkommen",
        passwordLabel: "Geben Sie Ihr Passwort ein",
        showPassword: "Passwort anzeigen",
        forgotPassword: "Passwort vergessen?",
        cantSignIn: "Anmeldung nicht möglich",
        recoveryText1: "Wenden Sie sich an einen anderen Administrator Ihrer Domain, um Ihr Konto wiederherzustellen.",
        recoveryLearnMore: "Weitere Informationen zur Kontowiederherstellung",
        recoveryText2: "Oder fordern Sie eine Überprüfung durch das Google Workspace-Supportteam an. Überprüfungen können bis zu 72 Stunden dauern.",
        contactSupport: "Support kontaktieren",
        help: "Hilfe", privacy: "Datenschutz", terms: "Nutzungsbedingungen"
    },
    "it": {
        title: "Accedi",
        subtitle: "Utilizza il tuo Account Google",
        emailLabel: "Indirizzo email o numero di telefono",
        forgotEmail: "Hai dimenticato l'indirizzo email?",
        guest: "Non è il tuo computer? Usa la modalità ospite per accedere privatamente.",
        guestLink: "Scopri di più sull'utilizzo della modalità ospite",
        createAccount: "Crea account",
        createPersonal: "Per me",
        createChild: "Per mio figlio/a",
        createWork: "Per il lavoro o la mia attività",
        next: "Avanti",
        welcome: "Ti diamo il benvenuto",
        passwordLabel: "Inserisci la password",
        showPassword: "Mostra password",
        forgotPassword: "Password dimenticata?",
        cantSignIn: "Impossibile accedere",
        recoveryText1: "Per recuperare il tuo account, contatta un altro amministratore del tuo dominio.",
        recoveryLearnMore: "Scopri di più sul recupero dell'account",
        recoveryText2: "Oppure richiedi una verifica al team di assistenza di Google Workspace. Le verifiche possono richiedere fino a 72 ore.",
        contactSupport: "Contatta l'assistenza",
        help: "Guida", privacy: "Privacy", terms: "Termini"
    },
    "ja": {
        title: "ログイン",
        subtitle: "Google アカウントを使用",
        emailLabel: "メールアドレスまたは電話番号",
        forgotEmail: "メールアドレスを忘れた場合",
        guest: "自分のパソコンでない場合は、ゲストモードを使用して非公開でログインしてください。",
        guestLink: "ゲストモードの使用方法について",
        createAccount: "アカウントを作成",
        createPersonal: "個人で使用",
        createChild: "子供用",
        createWork: "仕事 / ビジネス用",
        next: "次へ",
        welcome: "ようこそ",
        passwordLabel: "パスワードを入力",
        showPassword: "パスワードを表示",
        forgotPassword: "パスワードをお忘れの場合",
        cantSignIn: "ログインできませんでした",
        recoveryText1: "アカウントを復元するには、ドメインの別の管理者にお問い合わせください。",
        recoveryLearnMore: "アカウントの復元について",
        recoveryText2: "または、Google Workspace サポートチームに審査をリクエストしてください。審査には最大 72 時間かかる場合があります。",
        contactSupport: "サポートに問い合わせる",
        help: "ヘルプ", privacy: "プライバシー", terms: "規約"
    },
    "zh": {
        title: "登录",
        subtitle: "使用您的 Google 账号",
        emailLabel: "电子邮件地址或电话号码",
        forgotEmail: "忘记了电子邮件地址？",
        guest: "不是您的计算机？请使用访客模式无痕登录。",
        guestLink: "详细了解如何使用访客模式",
        createAccount: "创建账号",
        createPersonal: "我自己使用",
        createChild: "为我的孩子",
        createWork: "为工作或业务",
        next: "下一步",
        welcome: "欢迎",
        passwordLabel: "输入您的密码",
        showPassword: "显示密码",
        forgotPassword: "忘记了密码？",
        cantSignIn: "无法登录",
        recoveryText1: "如需恢复您的账号，请联系您网域中的其他管理员。",
        recoveryLearnMore: "详细了解账号恢复",
        recoveryText2: "或者请求 Google Workspace 支持团队进行审核。审核最长可能需要 72 小时。",
        contactSupport: "与支持团队联系",
        help: "帮助", privacy: "隐私权", terms: "条款"
    }
};

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("language");
    const saved = localStorage.getItem("clone_lang") || "en";

    if (select) {
        select.value = saved;
        select.addEventListener("change", function () {
            localStorage.setItem("clone_lang", select.value);
            applyLanguage(select.value);
        });
    }

    applyLanguage(saved);
});
