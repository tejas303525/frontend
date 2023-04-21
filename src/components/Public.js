import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Commnet TaskManager</span></h1>
            </header>
            <main className="public__main">
                <Link to="/login">Employee Login</Link>
            </main>
            <footer>
                @CommnetSystemConsultancyLLC
            </footer>
        </section>

    )
    return content
}
export default Public