import type { Endpoint, PayloadRequest } from 'payload';

const HealthCheck: Endpoint[] = [
    {
      path: '/health',
      method: 'get',
      handler: async (req: PayloadRequest) => {
        try {
          // Test database connection
          await req.payload.find({
            collection: 'users',
            limit: 1,
            overrideAccess: true
          });
  
          return Response.json({
            status: 'OK',
            database: 'connected',
            timestamp: new Date().toISOString()
          });
        } catch (error: any) {
          req.payload.logger.error('Health check failed:', error);
          return Response.json(
            {
              status: 'ERROR',
              database: 'disconnected',
              error: error.message
            },
            { status: 500 }
          );
        }
      },
    },
  ]

export default HealthCheck;