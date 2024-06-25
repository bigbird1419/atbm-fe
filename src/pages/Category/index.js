import { useParams } from "react-router-dom"

import Virus from "../../components/Virus"

export default function Category() {
    const { categoryId } = useParams()

    return (
        <div>
            {categoryId > 0 &&
                <div className="mt-8">
                    <Virus categoryId={categoryId} />
                </div>
            }
        </div>
    )
}