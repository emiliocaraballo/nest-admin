//  Libraries
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { to } from 'await-to-js';
  
// Get current typeorm connection
import { getRepository } from 'typeorm';
import { errorMessage } from 'src/models/errorsMessage/errorMessage.entity';
  
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // Get response error data
    const responseError = exception.getResponse() as IErrorData;

    // TODO: SET LOGGER
    console.error('responseError =>', responseError);

    // Default error message obj
    const defaultErrorMessage = {
    code: 'UNEXPECTED_ERROR',
    description: 'Ha ocurrido un error inesperado',
    title: 'Lo sentimos',
    };

    // Get message from database
    const [errorGetMessage, messageError] = await to(
    getRepository(errorMessage).findOne({
        where: { APLICACION: 'app', CODIGO: responseError?.code },
        select: ['CODIGO', 'MENSAJE', 'TITULO'],
    }),
    );

    // Return default error message
    if (errorGetMessage) {
    response.status(status).json({
        ...defaultErrorMessage,
        statusCode: status || 500,
        path: request.url,
    });
    }

    // SET data from errorMessage table
    const errorMessageData: IErrorData = {
    code: messageError?.CODIGO || defaultErrorMessage.code,
    description: messageError?.MENSAJE || defaultErrorMessage.description,
    title: messageError?.TITULO || defaultErrorMessage.title,
    additionalData: responseError?.additionalData,
    };

    response.status(status).json({
    ...errorMessageData,
    statusCode: status || 500,
    path: request.url,
    });
}
}