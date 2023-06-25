import { useRouter } from "next/router";
import { PublicLayout } from "../components/layouts";

export default function Home() {
  const router = useRouter();

  return (
    <PublicLayout title="Home">
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl">Página de inicio</h1>
        <div className="mt-5">
          <button
            className="btn-primary py-2 px-6 text-3xl bg-blue-500 text-white hover:bg-green-500"
            onClick={() => {
              router.push("./auth/login");
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </PublicLayout>
  );
}
