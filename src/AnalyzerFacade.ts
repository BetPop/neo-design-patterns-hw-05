import { DirectoryAnalyzer } from './DirectoryAnalyzer';
import { ReportAdapter } from './ReportAdapter';

export class AnalyzerFacade {
  private analyzer = new DirectoryAnalyzer();
  private adapter: ReportAdapter;

  constructor(adapter: ReportAdapter) {
    this.adapter = adapter;
  }

  generateReport(dirPath: string): string {
    const analysis = this.analyzer.analyze(dirPath);
    return this.adapter.export(analysis);
  }
}
