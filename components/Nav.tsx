import Link from 'next/link'
import { AdjustmentsIcon, ChartPieIcon} from '@heroicons/react/outline'

const Nav = () => {
    return(
        <div className="w-full flex p-2">
            <Link href="/chart">
                <div className="flex justify-center items-center p-2">
                    <ChartPieIcon className="w-6 h-6" />
                </div>
            </Link>
            <div className="flex-1 text-center p-2 text-sm font-medium"><p>Welcome back!</p></div>
            <Link href="/settings">
                <div className="flex justify-center items-center p-2">
                    <AdjustmentsIcon className="w-6 h-6" />
                </div>
            </Link>
        </div>
    )
}

export default Nav;