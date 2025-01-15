import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    if (!import.meta.env.RESEND_API_KEY) {
        return new Response(JSON.stringify({
            error: 'RESEND_API_KEY no está configurada'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const formData = await request.json();
        const { firstName, lastName, email, phone, service, message } = formData;

        // Validación básica
        if (!firstName || !lastName || !email || !service || !message) {
            return new Response(JSON.stringify({
                error: 'Faltan campos requeridos'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Zenithdev8 <Zenithdev8@resend.dev>',
            to: 'zenithdev8@gmail.com',
            subject: `New Contact from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        if (error) {
            return new Response(JSON.stringify({
                error: error.message
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new Response(JSON.stringify({
            success: true,
            data
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al enviar email:', error);
        return new Response(JSON.stringify({
            error: 'Error al enviar el email'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}