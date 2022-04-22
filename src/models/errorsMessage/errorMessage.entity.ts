import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/**
 * Table to store errors message for app
 */
@Entity({ name: 'ECOMMERCE_MENSAJE_ERRORES' })
export class errorMessage {
  @PrimaryGeneratedColumn({ type: 'int' })
  ID_MENSAJE_ERROR?: number;

  @Column({ type: 'varchar', length: 50 })
  CODIGO: string;

  @Column({ type: 'varchar', length: 200 })
  MENSAJE: string;

  @Column({ type: 'varchar', length: 50 })
  TITULO: string;

  @Column({ type: 'varchar', length: 20 })
  APLICACION: string;

  // ---> AUDIT

  @Column({ type: 'bit' })
  AUDIT_ESTADO?: number;

  @Column({ type: 'datetime' })
  AUDIT_FECHA_CREACION?: string;

  @Column({ type: 'varchar', length: 30 })
  AUDIT_USUARIO_CREACION?: string;

  @Column({ type: 'datetime' })
  AUDIT_FECHA_MODIFICACION?: string;

  @Column({ type: 'varchar', length: 30 })
  AUDIT_USUARIO_MODIFICACION?: string;
}