"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FooterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  dialogType: string;
}

export default function FooterDialog({ isOpen, onClose, dialogType }: FooterDialogProps) {
  const getDialogContent = () => {
    switch (dialogType) {
      case "caracteristicas":
        return {
          title: "Características del Traductor AI",
          description:
            "Descubre las potentes funcionalidades de nuestro traductor inteligente",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Traducción en Tiempo Real</h4>
                    <p className="text-sm text-muted-foreground">
                      Traduce texto instantáneamente
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Múltiples Idiomas</h4>
                    <p className="text-sm text-muted-foreground">
                      Soporte para 3 idiomas, inglés, español y francés
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">IA Avanzada</h4>
                    <p className="text-sm text-muted-foreground">
                      Utiliza modelos de lenguaje de última generación
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Interfaz Intuitiva</h4>
                    <p className="text-sm text-muted-foreground">
                      Diseño moderno y fácil de usar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        };

      case "actualizaciones":
        return {
          title: "Últimas Actualizaciones",
          description:
            "Mantente al día con las nuevas funcionalidades y mejoras",
          content: (
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-primary">
                    v1.0.0 - Agosto 2025
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fases iniciales de desarrollo del proyecto.
                  </p>
                </div>
              </div>
            </div>
          ),
        };

      case "acerca-de":
        return {
          title: "Acerca de Syntora",
          description: "Conoce más sobre nuestra empresa y misión",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Syntora es una empresa innovadora fundada por Santi Moreno,
                especializada en el desarrollo de soluciones de inteligencia
                artificial y software de alta calidad.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">Nuestra Misión</h4>
                <p className="text-sm text-muted-foreground">
                  Democratizar el acceso a la tecnología de traducción
                  inteligente, haciendo que la comunicación global sea más
                  accesible y precisa para todos.
                </p>
                <h4 className="font-semibold">Nuestros Valores</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Innovación constante en software e IA</li>
                  <li>• Calidad y precisión en cada traducción</li>
                  <li>• Accesibilidad para usuarios de todo el mundo</li>
                  <li>• Privacidad y seguridad de datos</li>
                </ul>
              </div>
            </div>
          ),
        };

      case "contacto":
        return {
          title: "Contacto",
          description: "Ponte en contacto con nuestro equipo",
          content: (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">
                      morenoestradasantiago@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-sm text-muted-foreground">
                      CDMX, México
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Soporte</p>
                    <p className="text-sm text-muted-foreground">
                      Disponible 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        };

      default:
        return {
          title: "Información",
          description: "Información del proyecto",
          content: <p>Información no disponible</p>,
        };
    }
  };

  const content = getDialogContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        {content.content}
      </DialogContent>
    </Dialog>
  );
}
