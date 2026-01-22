const LegalLayout = ({ title, children, lastUpdated }) => {
    return (
        <div className="pt-24 min-h-screen pb-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                    {lastUpdated && <p className="text-gray-500">Last Updated: {lastUpdated}</p>}
                </div>
                <div className="prose prose-lg prose-blue max-w-none text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
