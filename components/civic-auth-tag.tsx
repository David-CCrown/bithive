import Image from "next/image";

const CivicAuthTag = () => { 
    return (
        <div className="mt-8 text-sm text-accent flex items-center justify-center">
            <span className="text-gray-700">Powered by</span>
            <Image
            src="/civic.png"
            alt="Civic Auth Logo"
                className="h-8 w-8 ml-2 mr-1"
                width={32}
                height={32}
                priority
            />
            <span className="text-gray-700">Civic Auth</span>
        </div>
    );
}

export default CivicAuthTag;