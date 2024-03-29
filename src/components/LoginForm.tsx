import { Button, Container, Form, FormField, Header, Input, SpaceBetween } from "@cloudscape-design/components";
import { FormEvent, useState } from "react";


export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <Form
            actions={
                <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                        Problemas para logar?
                    </Button>
                    <Button variant="primary">Login</Button>
                </SpaceBetween>
            }>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <Container header={<Header variant="h2">Fazer login</Header>}>
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Usuário">
                            <Input placeholder="Usuário"
                                type="text" value={username}
                                onChange={({ detail }) => setUsername(detail.value)} />
                        </FormField>
                        <FormField label="Usuário">
                            <Input placeholder="Senha"
                                type="password" value={password}
                                onChange={({ detail }) => setPassword(detail.value)} />
                        </FormField>
                    </SpaceBetween>
                </Container>
            </form>
        </Form>
    );

}