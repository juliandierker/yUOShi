import React, { useCallback } from "react"

const LoginOAuth = () => {
    const onStartOAuth = useCallback(async () => {
        await new Promise(res => Meteor.loginWithStudip(undefined, res))
    }, [])

    return <div>
        <p>Bitte identifizieren Sie sich.</p>
        <button onClick={onStartOAuth} type="button">Mit stud.IP anmelden</button>
    </div>
}

export default LoginOAuth
