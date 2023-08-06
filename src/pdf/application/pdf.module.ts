// pdf/application/pdf.module.ts
import { Module } from '@nestjs/common';
import { PdfController } from '../pdf.controller';
import { PdfInfrastructureModule } from '../infrastructure/pdf.module';

@Module({
    imports: [PdfInfrastructureModule],
    controllers: [PdfController],
})
export class PdfApplicationModule {}
