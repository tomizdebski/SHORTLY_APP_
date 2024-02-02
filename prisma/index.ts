//@ts-nocheck
import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}



// `declare global { ... }`: Te bloki kodu rozszerzają interfejs `Global` z przestrzeni nazw `NodeJS`. Dodają one do globalnego obiektu właściwość `prisma`, która jest typu `PrismaClient`. Pozwala to na globalny dostęp do klienta Prisma w Twojej aplikacji.

//`let prisma: PrismaClient;`: Ta linia deklaruje zmienną `prisma` typu `PrismaClient`. Ta zmienna będzie używana do przechowywania instancji klienta Prisma.




let prisma: PrismaClient;

declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

