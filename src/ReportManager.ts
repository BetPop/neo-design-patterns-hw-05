import { AnalyzerFacade } from './AnalyzerFacade';
import { JsonReportAdapter } from './JsonReportAdapter';
import { CsvReportAdapter } from './CsvReportAdapter';
import { XmlReportAdapter } from './XmlReportAdapter';
import * as fs from 'fs';
import * as path from 'path';

export class ReportManager {
  private format: string;

  constructor(format: string) {
    this.format = format.toLowerCase();
  }

  generateReport(targetPath: string): void {
    try {
      const adapter = this.getAdapter();
      const analyzerFacade = new AnalyzerFacade(adapter);

      const reportContent = analyzerFacade.generateReport(targetPath);

      const timestamp = new Date().toISOString().replace(/:/g, '-');
      const reportsDir = path.join(__dirname, '..', 'reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
      }

      const filePath = path.join(reportsDir, `report-${timestamp}.${this.format}`);
      fs.writeFileSync(filePath, reportContent);

      console.log(`Report generated successfully: ${filePath}`);
    } catch (err) {
      console.error('Error generating report:', (err as Error).message);
    }
  }

  private getAdapter() {
    switch (this.format) {
      case 'json': return new JsonReportAdapter();
      case 'csv': return new CsvReportAdapter();
      case 'xml': return new XmlReportAdapter();
      default: throw new Error(`Unsupported format: ${this.format}`);
    }
  }
}
