from flask import Flask


def init_app():
    """Initialize the core application"""

    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    with app.app_context():
        from .compatibility import compatibility
        app.register_blueprint(compatibility.compatibility_bp)

        return app
