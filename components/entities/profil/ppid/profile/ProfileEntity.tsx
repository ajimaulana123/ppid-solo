interface ProfileEntityProps {
  title: string;
  description: string;
}

export const ProfileEntity = ({ title, description }: ProfileEntityProps) => {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-6 py-24 pb-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
