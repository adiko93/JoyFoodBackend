module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "tonal-affinity-342016.appspot.com",
        publicFiles: false,
        uniform: false,
        basePath: "",

        bucketName: "tonal-affinity-342016.appspot.com",
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project_id: "tonal-affinity-342016",
          private_key_id: "0499fc835548c3c6b99f0f8b15c4a564e5fcec93",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+88TQWEHGmLb3\nWDo4aq59kaYxZ7IZjxA3A5/I0ZeBA1aQwWbW1DpMjmjDz1aYhXeF3AFZ35MlqurF\n6+Fb21JWSvoGu3K7AKpzUTuOMIOb1yTkIY/zFksP8OJgOTiT3SkJKCVdCMRPMnfe\nFeP/1uIIg8Qhyi9kl0d9uxWU5K+cHaV7SG4AECaK7J3BhMjoIVyqNyyv6SvzdbGi\nfxuoVtoR4Ww5gmwnvthdpMOnA061Wp8qD4hFyPZltjZq8htKtY4I13B0byf8H9eF\nqbt4wPSSP0za/7+BVKFbYfdniuXdRHoTKwihCZGHYnFtJFKXp4vKZMneqcH3sg0y\nynLtsMXXAgMBAAECggEAL+aGoJ0DIwZ8H2AKesyIKQe4YPxaOP8iWiqWkpHBJ6Pm\nuzlIyutCFKJEtZn1Zx1T9khSLnFfQDu32R5q0dgat3rnbXjoNvDb0UG3ZtvUp+s4\nXeHtclVNTxpmLy0rfCwmdx2TAduJIzTNzPBA2ZTV7rzfHnrRmLI6RNgBefBD/S0j\nv+hwJ2HHVjgJSYFb7wPvRQion5ndg4reQBO8c6uEBNC65yJyKICzdVNmVP+VRU60\nV6i93zVvEN/tVriVS+qVh5I1WENpRbMr358isgvIbOYGa2MEgUYES8GGjlraXXZ4\nasDot4eBOPxs1JWocpRrDweU2U2wf1ZkZUKDC00NAQKBgQDe0uAO1vtqllDw9adz\nZeeFAbV0vTWXspQTw6LBZbGoWrzT826FJ7fRzQ7ZoJPARDbBo0ggaBLdgFdMOVtH\nUoNNwWVxNlG/FCL55Rnpua+NlZB2SV64oU+RKlcXqYdNQy0OgvTFLW7UAXyvk6m+\nYWgjHAVaB4X3xp+bV00TmcV35wKBgQDbYhUnuk3vB+1HXnJ9PfYZysQHTDtJDQ1w\nWufeEbApXSBdGmS7GqRNGsGVLxRVL60+uEfBb4lHA8hVGXRCJcrU/LRxcE531npp\newSiQ+NFd0nBvjRGdzauf27+4z1jJ5hDTopr7m5hVJpMnAZlvfUzD3/j7gWdZCou\nKB6w9T3EkQKBgBnQA/S0ItvuHeJMEuHjZDacRBEJ+jNglJbViv0scrA2Erna8Wqr\ndzfusVG0sGkNfepgp/JZHBZcz8AcxN42SM+xH7dFu6KPCp44VBAnWpbkRJ/vT/HD\nfhwq83viP7JLneSYdxKAeN5GbdNJH9jWH+IxVM1hIbvaXpL4Qg2LOrzxAoGAO2d5\ntwI5rCoHVDX85nDqvN0s65T20LcaFnxnILjFbM3sv4kwEYILT12ZYZ4X8WExljQs\nKfLbx0D89B4qXucA3192NOlmNgj7qKhI/u9HET5V2IJ6gUIyqlmTYq2Bp+HG1yLj\nVIqBlRVlmqz9BnvDc4oU5VFEb/P5f/oZJW2ixiECgYB9rpFWoJgkMvitI9DT+fN4\ny4SQ2gcM2EsAQ8T92MzqLungJXWkzYvMebSknTpsLly6bkiMq1doqa1VC8K7aV69\n9EUFUa0S2VPqbyjnPE1a62S+8++32siSIMTmjo7rbbjtqHm5PxJQxxivR+/oZroq\nXpZyeYxiDMHxXL1dZxzrBg==\n-----END PRIVATE KEY-----\n",
          client_email: "tonal-affinity-342016@appspot.gserviceaccount.com",
          client_id: "115508386835393965651",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/tonal-affinity-342016%40appspot.gserviceaccount.com",
        }, // replace `{}` with your serviceAccount JSON object
        baseUrl:
          "https://storage.googleapis.com/tonal-affinity-342016.appspot.com",
        basePath: "",
      },
    },
  },
  // ...
});
