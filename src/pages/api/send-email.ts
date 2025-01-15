import { Resend } from 'resend';

export const POST = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    try {
        const formData = await request.json();
        const { firstName, lastName, email, phone, service, message } = formData;

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
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
    }
}