import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"

export default function CovidList({covid}) {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Vietnam's COVID-19 Information</h1>
                <div className="container mt-5">
                    <table className="table table-striped text-center" border={'1px'}>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            covid.map(covids => (
                                <tr key={covids.id}>
                                    <td>{covids.Date}</td>
                                    <td>{covids.Confirmed}</td>
                                    <td>{covids.Active}</td>
                                    <td>{covids.Recovered}</td>
                                    <td>{covids.Deaths}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/covidList")
    return {
        props: {
            covid: res.data
        }
    }
}