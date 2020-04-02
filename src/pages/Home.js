import React, { Fragment, useContext } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GitHubContext } from '../context/github/gitHubContext'

export const Home = () => {
    /*
    const cards = new Array(15)
        .fill('')
        .map((_, i) => i)
        */
    //console.log(cards)

    const { loading, users } = useContext(GitHubContext)

    return (
        <Fragment>
            <Search />
            <div className="row">
                {loading
                    ? <p className="text-center">Загрузка</p>
                    :
                    users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}