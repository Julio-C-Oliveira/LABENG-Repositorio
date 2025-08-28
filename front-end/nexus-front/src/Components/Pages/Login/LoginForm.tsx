import React, { useCallback } from "react";

import { AtIcon, EyeIcon, PasswordIcon } from "@phosphor-icons/react";
import styles from "./Login.module.css";
import googleIcon from "/imgs/google-icon.png";

export interface LoginFormProps {
    handleSubmit: (mail: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
    const mailInputRef = React.useRef<HTMLInputElement>(null);
    const passwordInputRef = React.useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = React.useState(false);

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const mail = mailInputRef.current?.value || "";
        const password = passwordInputRef.current?.value || "";

        handleSubmit(mail, password);
    }, [handleSubmit]);

    const toggleShowPassword = useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.input}>
                <input
                    type="text"
                    placeholder="Email da conta"
                    name="email"
                    ref={mailInputRef}
                    required
                />
                <AtIcon />
            </div>
            <div className={styles.input}>
                <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    ref={passwordInputRef}
                    required
                />
                <PasswordIcon />
                <button type="button" onClick={toggleShowPassword}>
                    <EyeIcon />
                </button>
            </div>

            <hr className={styles.line} />

            <button className={styles.login_social} type="button">
                <img src={googleIcon} alt="Ícone do Google" />
                Login com Google
            </button>
            <button className={styles.sign_in_bttn} type="submit">
                Fazer login
            </button>
        </form>
    );
}
