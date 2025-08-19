import React, { useCallback } from "react";

import { AtIcon, EyeIcon, PasswordIcon, UserIcon } from "@phosphor-icons/react";
import styles from "./Login.module.css";

export interface SignupFormProps {
    handleSubmit: (name: string, username: string, mail: string, password: string, password_confirmation: string) => Promise<void>;
}

export const SignupForm: React.FC<SignupFormProps> = ({ handleSubmit }) => {
    const nameInputRef = React.useRef<HTMLInputElement>(null);
    const usernameInputRef = React.useRef<HTMLInputElement>(null);
    const mailInputRef = React.useRef<HTMLInputElement>(null);
    const passwordInputRef = React.useRef<HTMLInputElement>(null);
    const passwordConfirmationInputRef = React.useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = React.useState(false);
    const [acceptedTerms, setAcceptedTerms] = React.useState<boolean>(false);

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const name = nameInputRef.current?.value || "";
        const username = usernameInputRef.current?.value || "";
        const mail = mailInputRef.current?.value || "";
        const password = passwordInputRef.current?.value || "";
        const password_confirmation = passwordConfirmationInputRef.current?.value || "";

        handleSubmit(name, username, mail, password, password_confirmation);
    }, [handleSubmit]);

    const toggleShowPassword = useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    const toggleShowPasswordConfirmation = useCallback(() => {
        setShowPasswordConfirmation((prev) => !prev);
    }, []);

    const toggleAcceptedTerms = useCallback(() => {
        setAcceptedTerms((prev) => !prev);
    }, []);


    return (
        <form onSubmit={onSubmit}>
            <div className={styles.input}>
                <input
                    type="text"
                    ref={nameInputRef}
                    placeholder="Nome e sobrenome"
                    name="name"
                    required
                />
                <UserIcon />
            </div>
            <div className={styles.input}>
                <input
                    type="text"
                    ref={usernameInputRef}
                    placeholder="Nome de usuário"
                    name="username"
                    required
                />
                <UserIcon />
            </div>
            <div className={styles.input}>
                <input
                    type="text"
                    ref={mailInputRef}
                    placeholder="Email institucional"
                    name="email"
                    required
                />
                <AtIcon />
            </div>
            <div className={styles.input}>
                <input
                    type={showPassword ? "text" : "password"}
                    ref={passwordInputRef}
                    placeholder="Senha"
                    name="password"
                    required
                />
                <PasswordIcon />
                <button type="button" onClick={toggleShowPassword}>
                    <EyeIcon />
                </button>
            </div>
            <div className={styles.input}>
                <input
                    type={showPasswordConfirmation ? "text" : "password"}
                    ref={passwordConfirmationInputRef}
                    placeholder="Confirmar senha"
                    name="password_confirmation"
                    required
                />
                <PasswordIcon />
                <button type="button" onClick={toggleShowPasswordConfirmation}>
                    <EyeIcon />
                </button>
            </div>

            <div className={styles.agree_terms}>
                <button
                    className={`${styles.agree_bttn} ${acceptedTerms ? styles.active : ""}`}
                    type="button"
                    onClick={toggleAcceptedTerms}
                ></button>
                <span className={styles.agree_text}>
                    Ao criar sua conta, você concorda com nossos{" "}
                    <button type="button">termos de uso</button> e{" "}
                    <button type="button">política de privacidade</button>
                </span>
            </div>
            <hr className={styles.line} />

            <button
                className={`${styles.create_account_bttn} ${acceptedTerms ? styles.active : ""}`}
                type="submit"
                disabled={!acceptedTerms}
            >
                Criar conta
            </button>
        </form>
    );
}
