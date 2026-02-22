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
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-primary">
                    v1.0.1 - Diciembre 2025
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Actualizacion de proyectos
                  </p>
                </div>
              </div>
            </div>
          ),
        };

      case "acerca-de":
        return {
          title: "Acerca de mi",
          description: "Conoce más sobre mi y mi misión",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Santi Moreno, igeniero de software, estudiante de ingeniería en IA y fundador de Syntora.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">Mi misión</h4>
                <p className="text-sm text-muted-foreground">
                  Crear soluciones de software y IA que sean accesibles y útiles para todos, desde pequeño tuve la oportunidad de aprender y crear soluciones para mi propio negocio. Ahora quisiera crecer en el mundo empresarial del software.
                </p>
                <h4 className="font-semibold">Mis valores</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Respeto y empatía hacia los demás</li>
                  <li>• Responsabilidad y compromiso con el trabajo</li>
                  <li>• Innovación y creatividad en cada proyecto</li>
                  <li>• Eficiencia y productividad en cada tarea</li>
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
