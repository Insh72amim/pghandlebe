import { MigrationGenerator } from '@mikro-orm/migrations';

export class CustomMigrationGenerator extends MigrationGenerator {
  /**
   * @inheritDoc
   */
  generateMigrationFile(className, diff) {
    let ret = `import { Migration } from '@mikro-orm/migrations';\n\n`;
    ret += `export class ${className} extends Migration {\n\n`;
    ret += `  async up(): Promise<void> {\n`;
    diff.up.forEach((sql) => (ret += this.createStatement(sql, 4)));
    ret += `  }\n`;
    ret += `
    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }\n`;
    ret += `}\n`;
    return ret;
  }
}
