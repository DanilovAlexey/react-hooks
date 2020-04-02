import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GitHubContext } from '../context/github/gitHubContext'

export const Search = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GitHubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            //show("This is alert!")
            //console.log(value)
            return
        }

        github.clearUsers()

        if (value.trim()) {
            //console.log("request", value)
            alert.hide()
            github.search(value.trim())

        } else {
            alert.show('Введите данные пользователя!')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник юзера..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}