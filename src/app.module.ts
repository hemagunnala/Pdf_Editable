// app.module.ts
import { Module } from '@nestjs/common';
import { PdfController } from './pdf/pdf.controller';
import { PdfApplicationModule } from './pdf/application/pdf.module';

@Module({
  imports: [PdfApplicationModule],
  controllers: [PdfController],
})
export class AppModule {
}
